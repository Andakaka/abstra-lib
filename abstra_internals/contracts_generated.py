"""
This file is auto generated. Do not edit this file manually.
Source code: [monorepo]/contracts/generator.py
Last generated: 2024-01-19 16:38:24.774986
"""

import typing
from dataclasses import dataclass

CommonUserId = str

CommonUserEmail = str

CommonUserRolesItem = typing.Literal["workflow_viewer"]

CommonUserRolesItemValues: typing.List[CommonUserRolesItem] = ["workflow_viewer"]

CommonUserRoles = typing.List[CommonUserRolesItem]

CommonUserProjectId = str

CommonUserCreatedAt = str


@dataclass
class CommonUser:
    id: CommonUserId
    email: CommonUserEmail
    roles: CommonUserRoles
    projectId: CommonUserProjectId
    createdAt: CommonUserCreatedAt


CloudApiCliUserGetResponse = CommonUser

CloudApiCliAuthInfoResponseAuthorId = str

CloudApiCliAuthInfoResponseProjectId = str


@dataclass
class CloudApiCliAuthInfoResponse:
    authorId: CloudApiCliAuthInfoResponseAuthorId
    projectId: CloudApiCliAuthInfoResponseProjectId


CloudApiCliBuildCreateResponseUrl = str

CloudApiCliBuildCreateResponseBuildId = str


@dataclass
class CloudApiCliBuildCreateResponse:
    url: CloudApiCliBuildCreateResponseUrl
    buildId: CloudApiCliBuildCreateResponseBuildId


AbstraLibApiStageCardContentKey = str

AbstraLibApiStageCardContentValue = typing.Dict[str, typing.Any]

AbstraLibApiStageCardContentType = str


@dataclass
class AbstraLibApiStageCardContent:
    key: AbstraLibApiStageCardContentKey
    value: AbstraLibApiStageCardContentValue
    type: AbstraLibApiStageCardContentType


AbstraLibApiStageCardContentsItem = AbstraLibApiStageCardContent

AbstraLibApiStageCardContents = typing.List[AbstraLibApiStageCardContentsItem]

AbstraLibApiVisualizationName = str

AbstraLibApiVisualizationType = typing.Union[
    typing.Literal["text"],
    typing.Literal["image"],
    typing.Literal["table"],
    typing.Literal["progress-bar"],
]

AbstraLibApiVisualizationTypeValues: typing.List[AbstraLibApiVisualizationType] = [
    "text",
    "image",
    "table",
    "progress-bar",
]


@dataclass
class AbstraLibApiVisualization:
    name: AbstraLibApiVisualizationName
    type: AbstraLibApiVisualizationType


AbstraLibApiStageRunId = str

AbstraLibApiStageRunStage = str

AbstraLibApiStageRunData = typing.Dict[str, typing.Any]

AbstraLibApiStageRunStatus = typing.Union[
    typing.Literal["waiting"],
    typing.Literal["running"],
    typing.Literal["finished"],
    typing.Literal["failed"],
    typing.Literal["abandoned"],
]

AbstraLibApiStageRunStatusValues: typing.List[AbstraLibApiStageRunStatus] = [
    "waiting",
    "running",
    "finished",
    "failed",
    "abandoned",
]

AbstraLibApiStageRunCreatedAt = str

AbstraLibApiStageRunParentId = str

AbstraLibApiStageRunExecutionId = str


@dataclass
class AbstraLibApiStageRun:
    id: AbstraLibApiStageRunId
    stage: AbstraLibApiStageRunStage
    data: AbstraLibApiStageRunData
    status: AbstraLibApiStageRunStatus
    created_at: AbstraLibApiStageRunCreatedAt
    parent_id: typing.Optional[AbstraLibApiStageRunParentId]
    execution_id: typing.Optional[AbstraLibApiStageRunExecutionId]


AbstraLibApiStageRunCardId = str

AbstraLibApiStageRunCardCreatedAt = str

AbstraLibApiStageRunCardAssignee = str

AbstraLibApiStageRunCardStatus = AbstraLibApiStageRunStatus

AbstraLibApiStageRunCardContent = AbstraLibApiStageCardContents


@dataclass
class AbstraLibApiStageRunCard:
    id: AbstraLibApiStageRunCardId
    created_at: AbstraLibApiStageRunCardCreatedAt
    assignee: typing.Optional[AbstraLibApiStageRunCardAssignee]
    status: AbstraLibApiStageRunCardStatus
    content: AbstraLibApiStageRunCardContent


AbstraLibApiStageRunCardsItem = AbstraLibApiStageRunCard

AbstraLibApiStageRunCards = typing.List[AbstraLibApiStageRunCardsItem]

AbstraLibApiStageId = str

AbstraLibApiStageType = typing.Union[
    typing.Literal["form"],
    typing.Literal["hook"],
    typing.Literal["job"],
    typing.Literal["script"],
    typing.Literal["iterator"],
    typing.Literal["condition"],
]

AbstraLibApiStageTypeValues: typing.List[AbstraLibApiStageType] = [
    "form",
    "hook",
    "job",
    "script",
    "iterator",
    "condition",
]

AbstraLibApiStageTitle = str

AbstraLibApiStagePath = str

AbstraLibApiStageCanBeStarted = bool


@dataclass
class AbstraLibApiStage:
    id: AbstraLibApiStageId
    type: AbstraLibApiStageType
    title: AbstraLibApiStageTitle
    path: typing.Optional[AbstraLibApiStagePath]
    can_be_started: AbstraLibApiStageCanBeStarted


AbstraLibApiKanbanColumnSelectedStage = AbstraLibApiStage

AbstraLibApiKanbanColumnStageRunCards = AbstraLibApiStageRunCards

AbstraLibApiStagesItem = AbstraLibApiStage

AbstraLibApiStages = typing.List[AbstraLibApiStagesItem]

AbstraLibApiKanbanColumnStages = AbstraLibApiStages


@dataclass
class AbstraLibApiKanbanColumn:
    selected_stage: AbstraLibApiKanbanColumnSelectedStage
    stage_run_cards: AbstraLibApiKanbanColumnStageRunCards
    stages: AbstraLibApiKanbanColumnStages


AbstraLibApiKanbanColumnsItem = AbstraLibApiKanbanColumn

AbstraLibApiKanbanColumns = typing.List[AbstraLibApiKanbanColumnsItem]

AbstraLibApiKanbanDataColumns = AbstraLibApiKanbanColumns

AbstraLibApiKanbanDataNextStageOptions = AbstraLibApiStages


@dataclass
class AbstraLibApiKanbanData:
    columns: AbstraLibApiKanbanDataColumns
    next_stage_options: AbstraLibApiKanbanDataNextStageOptions


AbstraLibApiLocalLogMessageEvent = str

AbstraLibApiLocalLogMessageExecutionId = str

AbstraLibApiLocalLogMessagePayload = typing.Dict[str, str]

AbstraLibApiLocalLogMessageRuntimeType = str

AbstraLibApiLocalLogMessageRuntimeName = str

AbstraLibApiLocalLogMessageCreatedAt = float


@dataclass
class AbstraLibApiLocalLogMessage:
    event: AbstraLibApiLocalLogMessageEvent
    executionId: AbstraLibApiLocalLogMessageExecutionId
    payload: AbstraLibApiLocalLogMessagePayload
    runtimeType: AbstraLibApiLocalLogMessageRuntimeType
    runtimeName: AbstraLibApiLocalLogMessageRuntimeName
    createdAt: AbstraLibApiLocalLogMessageCreatedAt


AbstraLibApiStageRunLogsStageRun = AbstraLibApiStageRun

AbstraLibApiStageRunLogsLogsItem = AbstraLibApiLocalLogMessage

AbstraLibApiStageRunLogsLogs = typing.List[AbstraLibApiStageRunLogsLogsItem]

AbstraLibApiStageRunLogsStage = AbstraLibApiStage


@dataclass
class AbstraLibApiStageRunLogs:
    stage_run: AbstraLibApiStageRunLogsStageRun
    logs: AbstraLibApiStageRunLogsLogs
    stage: AbstraLibApiStageRunLogsStage


AbstraLibApiVisualizationsItem = AbstraLibApiVisualization

AbstraLibApiVisualizations = typing.List[AbstraLibApiVisualizationsItem]
