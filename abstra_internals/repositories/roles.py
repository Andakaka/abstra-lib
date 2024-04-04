import requests
from typing import List

from ..contracts_generated import (
    CommonRole,
)
from ..utils.environment import CLOUD_API_ENDPOINT

from ..credentials import (
    resolve_headers,
)


class RolesRepository:
    @property
    def headers(self):
        return resolve_headers()

    def get_roles(self) -> List[CommonRole]:
        url = f"{CLOUD_API_ENDPOINT}/cli/roles"
        response = requests.get(url, headers=self.headers)
        return [CommonRole.from_dict(role) for role in response.json()]


def roles_repository_factory() -> RolesRepository:
    return RolesRepository()
