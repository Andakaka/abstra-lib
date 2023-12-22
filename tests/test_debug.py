from unittest import TestCase, mock
from pathlib import Path
from abstra_internals.settings import Settings
from abstra_internals.utils.debug import make_debug_data
from inspect import stack
from .resources.make_debug.module import func


class TestDebug(TestCase):
    def setUp(self) -> None:
        Settings.set_root_path(str(Path(__file__).parent))

    def test_make_debug_data_from_exception(self):
        try:
            raise Exception("test")
        except Exception as exc:
            debug_data = make_debug_data(exc)

        self.maxDiff = None

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=__file__,
                            lineno=15,
                            name="test_make_debug_data_from_exception",
                            locals=mock.ANY,
                        )
                    ]
                )
            ),
        )

    def test_make_debug_data_from_frames(self):
        debug_data = make_debug_data(stack())

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=__file__,
                            lineno=38,
                            name="test_make_debug_data_from_frames",
                            locals=mock.ANY,
                        )
                    ]
                )
            ),
        )

    def test_make_debug_data_nested(self):
        def outer_func():
            raise Exception("test")

        try:
            func(outer_func)
            debug_data = None
        except Exception as exc:
            debug_data = make_debug_data(exc)

        self.maxDiff = None

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=__file__,
                            lineno=61,
                            name="test_make_debug_data_nested",
                            locals=mock.ANY,
                        ),
                        dict(
                            filename=str(
                                (
                                    Path(__file__) / "../resources/make_debug/module.py"
                                ).resolve()
                            ),
                            lineno=2,
                            name="func",
                            locals=mock.ANY,
                        ),
                        dict(
                            filename=__file__,
                            lineno=58,
                            name="outer_func",
                            locals=mock.ANY,
                        ),
                    ]
                )
            ),
        )

    def test_make_debug_data_nested_other_dir(self):
        Settings.set_root_path("./resources")

        def outer_func():
            raise Exception("test")

        try:
            func(outer_func)
            debug_data = None
        except Exception as exc:
            debug_data = make_debug_data(exc)

        self.maxDiff = None

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=str(
                                (
                                    Path(__file__) / "../resources/make_debug/module.py"
                                ).resolve()
                            ),
                            lineno=2,
                            name="func",
                            locals=mock.ANY,
                        ),
                    ]
                )
            ),
        )
