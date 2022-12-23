import {
  createPipeline as innerCreatePipeline,
  extract as innerExtract,
  transformToZip,
} from './materializedViewsExtract.js';
import pgPromise from 'pg-promise';

const pgp = pgPromise({ capSQL: true });

/*
## Exports
*/

// Properties

export const tableName = 'assessments';

export const createQuery = `CREATE TABLE IF NOT EXISTS ${tableName}
  (
    id SERIAL PRIMARY KEY,
    alternatelistingidentifier VARCHAR(50),
    assessmentbasis VARCHAR(30),
    assessmentdate TIMESTAMP WITH TIME ZONE,
    assessmentmethods VARCHAR(150),
    assessmenttypes VARCHAR(30),
    assessmentunitid VARCHAR(50) NOT NULL,
    assessmentunitname VARCHAR(255) NOT NULL,
    assessmentunitstatus VARCHAR(1) NOT NULL,
    associatedactionagency VARCHAR(10),
    associatedactionid VARCHAR(45),
    associatedactionname VARCHAR(255),
    associatedactionstatus VARCHAR(30),
    associatedactiontype NUMERIC,
    consentdecreecycle NUMERIC(4),
    cwa303dpriorityranking VARCHAR(25),
    cycleexpectedtoattain NUMERIC(4),
    cyclefirstlisted NUMERIC(4),
    cyclelastassessed NUMERIC(4) NOT NULL,
    cyclescheduledfortmdl NUMERIC(4),
    delisted VARCHAR(1),
    delistedreason VARCHAR(100),
    epaircategory VARCHAR(5),
    locationdescription VARCHAR(2000) NOT NULL,
    monitoringenddate TIMESTAMP WITH TIME ZONE,
    monitoringstartdate TIMESTAMP WITH TIME ZONE,
    organizationid VARCHAR(30) NOT NULL,
    organizationname VARCHAR(150) NOT NULL,
    organizationtype VARCHAR(30) NOT NULL,
    overallstatus VARCHAR(4000),
    parameterattainment VARCHAR(240) NOT NULL,
    parametergroup VARCHAR(60),
    parameterircategory NUMERIC(38),
    parametername VARCHAR(240) NOT NULL,
    parameterstateircategory NUMERIC(38),
    parameterstatus VARCHAR(240) NOT NULL,
    pollutantindicator VARCHAR(1),
    region VARCHAR(2),
    reportingcycle NUMERIC(4) NOT NULL,
    seasonenddate TIMESTAMP WITH TIME ZONE,
    seasonstartdate TIMESTAMP WITH TIME ZONE,
    sizesource VARCHAR(100),
    sourcescale VARCHAR(30),
    state VARCHAR(4000),
    stateircategory VARCHAR(5),
    useclassname VARCHAR(50),
    usegroup VARCHAR(128),
    useircategory NUMERIC(38),
    usename VARCHAR(255),
    usestateircategory NUMERIC(38),
    usesupport VARCHAR(1),
    vision303dpriority VARCHAR(1),
    watersize NUMERIC(18,4) NOT NULL,
    watersizeunits VARCHAR(15) NOT NULL,
    watertype VARCHAR(40)
  )`;

const insertColumns = new pgp.helpers.ColumnSet([
  { name: 'alternatelistingidentifier' },
  { name: 'assessmentbasis' },
  { name: 'assessmentdate' },
  { name: 'assessmentmethods' },
  { name: 'assessmenttypes' },
  { name: 'assessmentunitid' },
  { name: 'assessmentunitname' },
  { name: 'assessmentunitstatus' },
  { name: 'associatedactionagency' },
  { name: 'associatedactionid' },
  { name: 'associatedactionname' },
  { name: 'associatedactionstatus' },
  { name: 'associatedactiontype' },
  { name: 'consentdecreecycle' },
  { name: 'cwa303dpriorityranking' },
  { name: 'cycleexpectedtoattain' },
  { name: 'cyclefirstlisted' },
  { name: 'cyclelastassessed' },
  { name: 'cyclescheduledfortmdl' },
  { name: 'delisted' },
  { name: 'delistedreason' },
  { name: 'epaircategory' },
  { name: 'locationdescription' },
  { name: 'monitoringenddate' },
  { name: 'monitoringstartdate' },
  { name: 'organizationid' },
  { name: 'organizationname' },
  { name: 'organizationtype' },
  { name: 'overallstatus' },
  { name: 'parameterattainment' },
  { name: 'parametergroup' },
  { name: 'parameterircategory' },
  { name: 'parametername' },
  { name: 'parameterstateircategory' },
  { name: 'parameterstatus' },
  { name: 'pollutantindicator' },
  { name: 'region' },
  { name: 'reportingcycle' },
  { name: 'seasonenddate' },
  { name: 'seasonstartdate' },
  { name: 'sizesource' },
  { name: 'sourcescale' },
  { name: 'state' },
  { name: 'stateircategory' },
  { name: 'useclassname' },
  { name: 'usegroup' },
  { name: 'useircategory' },
  { name: 'usename' },
  { name: 'usestateircategory' },
  { name: 'usesupport' },
  { name: 'vision303dpriority' },
  { name: 'watersize' },
  { name: 'watersizeunits' },
  { name: 'watertype' },
]);

// Methods

export async function extract(s3Config, next = 0, retryCount = 0) {
  return await innerExtract('profile_assessments', s3Config, next, retryCount);
}

export function createPipeline() {
  return innerCreatePipeline(tableName);
}

export async function transform(data, pipeline, first) {
  const rows = [];
  data.forEach((datum) => {
    rows.push({
      alternatelistingidentifier: datum.alternatelistingidentifier,
      assessmentbasis: datum.assessmentbasis,
      assessmentdate: datum.assessmentdate,
      assessmentmethods: datum.assessmentmethods,
      assessmenttypes: datum.assessmenttypes,
      assessmentunitid: datum.assessmentunitid,
      assessmentunitname: datum.assessmentunitname,
      assessmentunitstatus: datum.assessmentunitstatus,
      associatedactionagency: datum.associatedactionagency,
      associatedactionid: datum.associatedactionid,
      associatedactionname: datum.associatedactionname,
      associatedactionstatus: datum.associatedactionstatus,
      associatedactiontype: datum.associatedactiontype,
      consentdecreecycle: datum.consentdecreecycle,
      cwa303dpriorityranking: datum.cwa303dpriorityranking,
      cycleexpectedtoattain: datum.cycleexpectedtoattain,
      cyclefirstlisted: datum.cyclefirstlisted,
      cyclelastassessed: datum.cyclelastassessed,
      cyclescheduledfortmdl: datum.cyclescheduledfortmdl,
      delisted: datum.delisted,
      delistedreason: datum.delistedreason,
      epaircategory: datum.epaircategory,
      locationdescription: datum.locationdescription,
      monitoringenddate: datum.monitoringenddate,
      monitoringstartdate: datum.monitoringstartdate,
      organizationid: datum.organizationid,
      organizationname: datum.organizationname,
      organizationtype: datum.organizationtype,
      overallstatus: datum.overallstatus,
      parameterattainment: datum.parameterattainment,
      parametergroup: datum.parametergroup,
      parameterircategory: datum.parameterircategory,
      parametername: datum.parametername,
      parameterstateircategory: datum.parameterstateircategory,
      parameterstatus: datum.parameterstatus,
      pollutantindicator: datum.pollutantindicator,
      region: datum.region,
      reportingcycle: datum.reportingcycle,
      seasonenddate: datum.seasonenddate,
      seasonstartdate: datum.seasonstartdate,
      sizesource: datum.sizesource,
      sourcescale: datum.sourcescale,
      state: datum.state,
      stateircategory: datum.stateircategory,
      useclassname: datum.useclassname,
      usegroup: datum.usegroup,
      useircategory: datum.useircategory,
      usename: datum.usename,
      usestateircategory: datum.usestateircategory,
      usesupport: datum.usesupport,
      vision303dpriority: datum.vision303dpriority,
      watersize: datum.watersize,
      watersizeunits: datum.watersizeunits,
      watertype: datum.watertype,
    });
  });

  await transformToZip(rows, pipeline, first);

  return pgp.helpers.insert(rows, insertColumns, tableName);
}
