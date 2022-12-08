export default {
  actions: {
    description: 'Descriptions of actions',
    fields: [
      'actionAgency',
      'actionId',
      'actionName',
      'assessmentUnitId',
      'assessmentUnitName',
      'completionDate',
      'inIndianCountry',
      'includeInMeasure',
      'locationDescription',
      'organizationId',
      'organizationName',
      'organizationType',
      'parameter',
      'region',
      'state',
      'waterSize',
      'waterSizeUnits',
      'waterType',
    ],
    label: 'Actions',
    resource: 'actions',
  },
  assessmentUnits: {
    description: 'Description of assessment units',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'assessmentUnitStatus',
      'locationDescription',
      'locationText',
      'locationTypeCode',
      'organizationId',
      'organizationName',
      'organizationType',
      'region',
      'sizeSource',
      'sourceScale',
      'state',
      'useClassName',
      'waterSize',
      'waterSizeUnits',
      'waterType',
    ],
    label: 'Assessment Units',
    resource: 'assessmentUnits',
  },
  assessments: {
    description: 'Description of assessments',
    fields: [
      'alternateListingIdentifier',
      'assessmentBasis',
      'assessmentDate',
      'assessmentMethods',
      'assessmentTypes',
      'assessmentUnitId',
      'assessmentUnitName',
      'assessmentUnitStatus',
      'associatedActionAgency',
      'associatedActionId',
      'associatedActionName',
      'associatedActionStatus',
      'associatedActionType',
      'consentDegreeCycle',
      'cwa303dPriorityRanking',
      'cycleExpectedToAttain',
      'cycleFirstListed',
      'cycleLastAssessed',
      'cycleScheduledForTmdl',
      'delisted',
      'delistedReason',
      'epaIrCategory',
      'locationDescription',
      'monitoringEndDate',
      'monitoringStartDate',
      'organizationId',
      'organizationName',
      'organizationType',
      'overallStatus',
      'parameterAttainment',
      'parameterGroup',
      'parameterIrCategory',
      'parameterName',
      'parameterStateIrCategory',
      'parameterStatus',
      'pollutantIndicator',
      'region',
      'reportingCycle',
      'seasonEndDate',
      'seasonStartDate',
      'sizeSource',
      'sourceScale',
      'state',
      'stateIrCategory',
      'useClassName',
      'useIrCategory',
      'useGroup',
      'useName',
      'useStateIrCategory',
      'useSupport',
      'vision303dPriority',
      'waterSize',
      'waterSizeUnits',
      'waterType',
    ],
    label: 'Assessments',
    resource: 'assessments',
  },
  assessmentUnitsMonitoring: {
    description: 'Description of assessment units with monitoring locations',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'assessmentUnitStatus',
      'locationDescription',
      'monitoringLocationDataLink',
      'monitoringLocationId',
      'monitoringLocationOrgId',
      'organizationId',
      'organizationName',
      'organizationType',
      'region',
      'reportingCycle',
      'sizeSource',
      'sourceScale',
      'state',
      'useClassName',
      'waterSize',
      'waterSizeUnits',
      'waterType',
    ],
    label: 'Assessment Units with Monitoring Locations',
    resource: 'assessmentUnitsMonitoringLocations',
  },
  catchmentCorrespondence: {
    description: 'Description of Catchment Correspondence',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'catchmentNhdplusId',
      'organizationId',
      'organizationName',
      'organizationType',
      'region',
      'reportingCycle',
      'state',
    ],
    label: 'Catchment Correspondence',
    resource: 'catchmentCorrespondence',
  },
  sources: {
    description: 'Description of Sources',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'causeName',
      'confirmed',
      'epaIrCategory',
      'locationDescription',
      'organizationId',
      'organizationName',
      'organizationType',
      'overallStatus',
      'parameterGroup',
      'region',
      'reportingCycle',
      'sourceName',
      'state',
      'stateIrCategory',
      'waterSize',
      'waterSizeUnits',
      'waterType',
    ],
    label: 'Sources',
    resource: 'sources',
  },
  tmdl: {
    description: 'Description of Total Maximum Daily Load',
    fields: [
      'actionAgency',
      'actionId',
      'actionName',
      'addressedParameter',
      'assessmentUnitId',
      'assessmentUnitName',
      'assessmentUnitStatus',
      'completionDate',
      'explicitMarginOfSafety',
      'fiscalYearEstablished',
      'implicitMarginOfSafety',
      'inIndianCountry',
      'includeInMeasure',
      'loadAllocation',
      'loadAllocationUnits',
      'locationDescription',
      'npdesIdentifier',
      'organizationId',
      'organizationName',
      'organizationType',
      'otherIdentifier',
      'pollutant',
      'region',
      'sourceType',
      'tmdlDate',
      'tmdlEndpoint',
      'wasteLoadAllocation',
      'waterSize',
      'waterSizeUnits',
      'waterType',
    ],
    label: 'Total Maximum Daily Load',
    resource: 'tmdl',
  },
} as const;
