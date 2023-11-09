from ..linter import LinterRule
from typing import List
from .env_in_bundle import EnvInBundle
from .missing_packages_in_requirements import MissingPackagesInRequirements
from .syntax_errors import SyntaxErrors
from .missing_entrypoint import MissingEntrypoint

rules: List[LinterRule] = [
    EnvInBundle(),
    MissingPackagesInRequirements(),
    SyntaxErrors(),
    MissingEntrypoint(),
]
