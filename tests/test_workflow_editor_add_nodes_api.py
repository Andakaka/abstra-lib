import unittest

from .fixtures import init_dir, clear_dir

from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.controller import MainController, UnknownNodeTypeError


class TestWorkflowEditorAddNodesApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        self.controller = MainController()

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_add_nodes(self):
        old_json = ProjectRepository.load()
        self.controller.workflow_add_nodes([])
        new_json = ProjectRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_adding(self):
        self.controller.workflow_add_nodes(
            [{"id": "form1", "type": "forms", "position": [0, 0], "title": "Form 1"}]
        )
        json = ProjectRepository.load()
        self.assertEqual(len(json.forms), 1)
        self.assertEqual(json.forms[0].path, "form1")
        self.assertEqual(json.forms[0].workflow_position, (0, 0))
        self.assertTrue(self.path.joinpath(json.forms[0].file).exists())

    def test_reject_invalid_node_type(self):
        with self.assertRaises(UnknownNodeTypeError):
            self.controller.workflow_add_nodes(
                [
                    {
                        "id": "form1",
                        "type": "invalid",
                        "position": [0, 0],
                        "title": "Form 1",
                    }
                ]
            )
