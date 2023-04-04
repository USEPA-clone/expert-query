export const profiles = {
  actions: {
    description:
      'Contains detailed information on plans to restore and protect water quality including Total Maximum Daily Loads (TMDLs), 4b Plans, 5R Plans, Protection Approaches, and other plans.',
    fields: [
      'actionAgency',
      'actionId',
      'actionName',
      'assessmentUnitId',
      'assessmentUnitName',
      'completionDateLo',
      'completionDateHi',
      'inIndianCountry',
      'includeInMeasure',
      'organizationId',
      'organizationName',
      'parameter',
      'region',
      'state',
      'waterType',
    ],
    label: 'Actions',
    resource: 'actions',
  },
  assessments: {
    description:
      'Contains detailed information on waters assessed under Section 305(b) of the Clean Water Act and waters listed as impaired under Section 303(d) of the Clean Water Act. This includes assessed uses and parameter attainments.',
    fields: [
      'alternateListingIdentifier',
      'assessmentBasis',
      'assessmentDateLo',
      'assessmentDateHi',
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
      'consentDecreeCycleLo',
      'consentDecreeCycleHi',
      'cwa303dPriorityRanking',
      'cycleExpectedToAttainLo',
      'cycleExpectedToAttainHi',
      'cycleFirstListedLo',
      'cycleFirstListedHi',
      'cycleLastAssessedLo',
      'cycleLastAssessedHi',
      'cycleScheduledForTmdlLo',
      'cycleScheduledForTmdlHi',
      'delisted',
      'delistedReason',
      'epaIrCategory',
      'monitoringEndDateLo',
      'monitoringEndDateHi',
      'monitoringStartDateLo',
      'monitoringStartDateHi',
      'organizationId',
      'organizationName',
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
      'seasonEndDateLo',
      'seasonEndDateHi',
      'seasonStartDateLo',
      'seasonStartDateHi',
      'state',
      'stateIrCategory',
      'useClassName',
      'useIrCategory',
      'useGroup',
      'useName',
      'useStateIrCategory',
      'useSupport',
      'vision303dPriority',
      'waterType',
    ],
    label: 'Assessments',
    resource: 'assessments',
  },
  assessmentUnits: {
    description:
      'Contains detailed information on assessment unit location and waterbody types. Please note, some waters may contain more than one water type.',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'assessmentUnitStatus',
      'locationText',
      'organizationId',
      'organizationName',
      'region',
      'reportingCycle',
      'state',
      'useClassName',
      'waterType',
    ],
    label: 'Assessment Units',
    resource: 'assessmentUnits',
  },
  assessmentUnitsMonitoringLocations: {
    description:
      'Contains information on the monitoring locations used to make assessment determinations at specific assessment units.',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'assessmentUnitStatus',
      'monitoringLocationDataLink',
      'monitoringLocationId',
      'monitoringLocationOrgId',
      'organizationId',
      'organizationName',
      'region',
      'reportingCycle',
      'state',
      'useClassName',
      'waterType',
    ],
    label: 'Assessment Units with Monitoring Locations',
    resource: 'assessmentUnitsMonitoringLocations',
  },
  catchmentCorrespondence: {
    description:
      'Contains the association between assessment units and National Hydrography Dataset Plus (NHDPlus) high resolution catchments.',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'catchmentNhdPlusId',
      'organizationId',
      'organizationName',
      'region',
      'reportingCycle',
      'state',
    ],
    label: 'Catchment Correspondence',
    resource: 'catchmentCorrespondence',
  },
  sources: {
    description: 'Identifies sources of impairment for assessed waters.',
    fields: [
      'assessmentUnitId',
      'assessmentUnitName',
      'causeName',
      'confirmed',
      'epaIrCategory',
      'organizationId',
      'organizationName',
      'overallStatus',
      'parameterGroup',
      'region',
      'reportingCycle',
      'sourceName',
      'state',
      'stateIrCategory',
      'waterType',
    ],
    label: 'Sources',
    resource: 'sources',
  },
  tmdl: {
    description:
      'Contains detailed information on Total Maximum Daily Load (TMDL) plans.',
    fields: [
      'actionAgency',
      'actionId',
      'actionName',
      'addressedParameter',
      'assessmentUnitId',
      'assessmentUnitName',
      'completionDateLo',
      'completionDateHi',
      'explicitMarginOfSafety',
      'fiscalYearEstablishedLo',
      'fiscalYearEstablishedHi',
      'implicitMarginOfSafety',
      'inIndianCountry',
      'includeInMeasure',
      'loadAllocation',
      'loadAllocationUnits',
      'npdesIdentifier',
      'organizationId',
      'organizationName',
      'otherIdentifier',
      'pollutant',
      'region',
      'sourceType',
      'state',
      'tmdlDateLo',
      'tmdlDateHi',
      'wasteLoadAllocation',
      'waterType',
    ],
    label: 'Total Maximum Daily Load',
    resource: 'tmdl',
  },
} as const;

export type Profile = keyof typeof profiles;
