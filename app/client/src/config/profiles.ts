export const profiles = {
  actions: {
    description:
      'Contains detailed information on plans to restore and protect water quality including Total Maximum Daily Loads (TMDLs), 4b Plans, 5R Plans, Protection Approaches, and other plans.',
    columns: new Map<string, { contextColumns?: string[] }>([
      ['objectId', {}],
      ['actionAgency', {}],
      [
        'actionId',
        {
          contextColumns: [
            'actionName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'actionName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['actionType', {}],
      [
        'assessmentUnitId',
        {
          contextColumns: [
            'assessmentUnitName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'assessmentUnitName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['completionDate', {}],
      ['includeInMeasure', {}],
      ['inIndianCountry', {}],
      ['locationDescription', {}],
      [
        'organizationId',
        {
          contextColumns: [
            'organizationName',
            'organizationType',
            'region',
            'state',
          ],
        },
      ],
      ['organizationName', { contextColumns: ['region', 'state'] }],
      ['organizationType', {}],
      ['parameter', {}],
      ['region', {}],
      ['state', { contextColumns: ['region'] }],
      ['waterSize', {}],
      ['waterSizeUnits', {}],
      ['waterType', {}],
    ]),
    label: 'Actions',
    resource: 'actions',
  },
  assessments: {
    description:
      'Contains detailed information on waters assessed under Section 305(b) of the Clean Water Act and waters listed as impaired under Section 303(d) of the Clean Water Act. This includes assessed uses and parameter attainments.',
    columns: new Map<string, { contextColumns?: string[] }>([
      ['objectId', {}],
      ['alternateListingIdentifier', {}],
      ['assessmentBasis', {}],
      ['assessmentDate', {}],
      ['assessmentMethods', {}],
      ['assessmentTypes', {}],
      [
        'assessmentUnitId',
        {
          contextColumns: [
            'assessmentUnitName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'assessmentUnitName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['assessmentUnitStatus', {}],
      ['associatedActionAgency', {}],
      ['associatedActionId', {}],
      ['associatedActionName', {}],
      ['associatedActionStatus', {}],
      ['associatedActionType', {}],
      ['consentDecreeCycle', {}],
      ['cwa303dPriorityRanking', {}],
      ['cycleExpectedToAttain', {}],
      ['cycleFirstListed', {}],
      ['cycleId', {}],
      ['cycleLastAssessed', {}],
      ['cycleScheduledForTmdl', {}],
      ['delisted', {}],
      ['delistedReason', {}],
      ['epaIrCategory', {}],
      ['locationDescription', {}],
      ['monitoringEndDate', {}],
      ['monitoringStartDate', {}],
      [
        'organizationId',
        {
          contextColumns: [
            'organizationName',
            'organizationType',
            'region',
            'state',
          ],
        },
      ],
      ['organizationName', { contextColumns: ['region', 'state'] }],
      ['organizationType', {}],
      ['overallStatus', {}],
      ['parameterAttainment', {}],
      ['parameterGroup', {}],
      ['parameterIrCategory', {}],
      [
        'parameterName',
        {
          contextColumns: ['parameterGroup'],
        },
      ],
      ['parameterStateIrCategory', {}],
      ['parameterStatus', {}],
      ['pollutantIndicator', {}],
      ['region', {}],
      ['reportingCycle', {}],
      ['seasonEndDate', {}],
      ['seasonStartDate', {}],
      ['sizeSource', {}],
      ['sourceScale', {}],
      ['state', { contextColumns: ['region'] }],
      ['stateIrCategory', {}],
      ['useClassName', {}],
      [
        'useGroup',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['useIrCategory', {}],
      [
        'useName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
            'useGroup',
          ],
        },
      ],
      ['useStateIrCategory', {}],
      ['useSupport', {}],
      ['vision303dPriority', {}],
      ['waterSize', {}],
      ['waterSizeUnits', {}],
      ['waterType', {}],
    ]),
    label: 'Assessments',
    resource: 'assessments',
  },
  assessmentUnits: {
    description:
      'Contains detailed information on assessment unit location and waterbody types. Please note, some waters may contain more than one water type.',
    columns: new Map<string, { contextColumns?: string[] }>([
      ['objectId', {}],
      [
        'assessmentUnitId',
        {
          contextColumns: [
            'assessmentUnitName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'assessmentUnitName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['assessmentUnitStatus', {}],
      ['cycleId', {}],
      ['locationDescription', {}],
      ['locationText', { contextColumns: ['locationTypeCode'] }],
      ['locationTypeCode', {}],
      [
        'organizationId',
        {
          contextColumns: [
            'organizationName',
            'organizationType',
            'region',
            'state',
          ],
        },
      ],
      ['organizationName', { contextColumns: ['region', 'state'] }],
      ['organizationType', {}],
      ['region', {}],
      ['reportingCycle', {}],
      ['sizeSource', {}],
      ['sourceScale', {}],
      ['state', { contextColumns: ['region'] }],
      ['useClassName', {}],
      ['waterSize', {}],
      ['waterSizeUnits', {}],
      ['waterType', {}],
    ]),
    label: 'Assessment Units',
    resource: 'assessmentUnits',
  },
  assessmentUnitsMonitoringLocations: {
    description:
      'Contains information on the monitoring locations used to make assessment determinations at specific assessment units.',
    columns: new Map<string, { contextColumns?: string[] }>([
      ['objectId', {}],
      [
        'assessmentUnitId',
        {
          contextColumns: [
            'assessmentUnitName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'assessmentUnitName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['assessmentUnitStatus', {}],
      ['cycleId', {}],
      ['locationDescription', {}],
      ['monitoringLocationDataLink', {}],
      ['monitoringLocationId', {}],
      ['monitoringLocationOrgId', {}],
      [
        'organizationId',
        {
          contextColumns: [
            'organizationName',
            'organizationType',
            'region',
            'state',
          ],
        },
      ],
      ['organizationName', { contextColumns: ['region', 'state'] }],
      ['organizationType', {}],
      ['region', {}],
      ['reportingCycle', {}],
      ['sizeSource', {}],
      ['sourceScale', {}],
      ['state', { contextColumns: ['region'] }],
      ['useClassName', {}],
      ['waterSize', {}],
      ['waterSizeUnits', {}],
      ['waterType', {}],
    ]),
    label: 'Assessment Units with Monitoring Locations',
    resource: 'assessmentUnitsMonitoringLocations',
  },
  catchmentCorrespondence: {
    description:
      'Contains the association between assessment units and National Hydrography Dataset Plus (NHDPlus) high resolution catchments.',
    columns: new Map<string, { contextColumns?: string[] }>([
      ['objectId', {}],
      [
        'assessmentUnitId',
        {
          contextColumns: [
            'assessmentUnitName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'assessmentUnitName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['catchmentNhdPlusId', {}],
      ['cycleId', {}],
      [
        'organizationId',
        { contextColumns: ['organizationType', 'region', 'state'] },
      ],
      ['organizationName', { contextColumns: ['region', 'state'] }],
      ['organizationType', {}],
      ['region', {}],
      ['reportingCycle', {}],
      ['state', { contextColumns: ['region'] }],
    ]),
    label: 'Catchment Correspondence',
    resource: 'catchmentCorrespondence',
  },
  sources: {
    description: 'Identifies sources of impairment for assessed waters.',
    columns: new Map<string, { contextColumns?: string[] }>([
      ['objectId', {}],
      [
        'assessmentUnitId',
        {
          contextColumns: [
            'assessmentUnitName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'assessmentUnitName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['causeName', {}],
      ['confirmed', {}],
      ['cycleId', {}],
      ['epaIrCategory', {}],
      ['locationDescription', {}],
      [
        'organizationId',
        {
          contextColumns: [
            'organizationName',
            'organizationType',
            'region',
            'state',
          ],
        },
      ],
      ['organizationName', { contextColumns: ['region', 'state'] }],
      ['organizationType', {}],
      ['overallStatus', {}],
      ['parameterGroup', {}],
      ['region', {}],
      ['reportingCycle', {}],
      ['sourceName', {}],
      ['state', { contextColumns: ['region'] }],
      ['stateIrCategory', {}],
      ['waterSize', {}],
      ['waterSizeUnits', {}],
      ['waterType', {}],
    ]),
    label: 'Sources',
    resource: 'sources',
  },
  tmdl: {
    description:
      'Contains detailed information on Total Maximum Daily Load (TMDL) plans.',
    columns: new Map<string, { contextColumns?: string[] }>([
      ['objectId', {}],
      ['actionAgency', {}],
      [
        'actionId',
        {
          contextColumns: [
            'actionName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'actionName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['addressedParameter', {}],
      [
        'assessmentUnitId',
        {
          contextColumns: [
            'assessmentUnitName',
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      [
        'assessmentUnitName',
        {
          contextColumns: [
            'organizationId',
            'organizationName',
            'region',
            'state',
          ],
        },
      ],
      ['completionDate', {}],
      ['explicitMarginOfSafety', {}],
      ['fiscalYearEstablished', {}],
      ['implicitMarginOfSafety', {}],
      ['includeInMeasure', {}],
      ['inIndianCountry', {}],
      ['loadAllocation', {}],
      ['loadAllocationUnits', {}],
      ['locationDescription', {}],
      ['npdesIdentifier', {}],
      [
        'organizationId',
        {
          contextColumns: [
            'organizationName',
            'organizationType',
            'region',
            'state',
          ],
        },
      ],
      ['organizationName', { contextColumns: ['region', 'state'] }],
      ['organizationType', {}],
      ['otherIdentifier', {}],
      ['pollutant', {}],
      ['region', {}],
      ['sourceType', {}],
      ['state', { contextColumns: ['region'] }],
      ['tmdlDate', {}],
      ['waterSize', {}],
      ['waterSizeUnits', {}],
      ['wasteLoadAllocation', {}],
      ['waterType', {}],
    ]),
    label: 'Total Maximum Daily Load',
    resource: 'tmdl',
  },
} as const;

export type Profile = keyof typeof profiles;
