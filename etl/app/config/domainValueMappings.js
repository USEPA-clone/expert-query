// Defaults: valueField = 'code', labelField = 'name'
export default {
  actionAgency: {
    domainName: 'AgencyCode',
  },
  assessmentUnitStatus: {
    domainName: 'StatusIndicator',
    valueField: 'name',
  },
  loadAllocationUnits: {
    domainName: 'LoadAllocationUnitCode',
  },
  locationTypeCode: {
    domainName: 'LocationTypeCode',
  },
  locationText: {
    domainName: 'LocationTypeValue',
  },
  organizationId: {
    domainName: 'OrgStateCode',
    labelField: 'context',
    valueField: 'context',
  },
  parameterGroup: {
    domainName: 'ParameterGroupCodeType',
  },
  pollutant: {
    domainName: 'ParameterName',
  },
  sourceName: {
    domainName: 'SourceName',
  },
  sourceScale: {
    domainName: 'SizeSourceScaleText',
  },
  sourceType: {
    domainName: 'PollutantSourceType',
  },
  stateIRCategory: {
    domainName: 'StateIRCategoryCode',
  },
  useClassName: {
    domainName: 'UseClassType',
    valueField: 'name',
  },
  waterSizeUnits: {
    domainName: 'WaterTypeUnitsCode',
  },
  waterType: {
    domainName: 'WaterTypeUnitsCode',
    labelField: 'context',
    valueField: 'context',
  },
};
