import * as database from './database.js';
import * as s3 from './s3.js';
import { log } from './utilities/logger.js';

export default async function etlJob(ignoreReady = false) {
  // load config from private s3 bucket
  const s3Config = await s3.loadConfig();

  if (!s3Config) {
    log.warn(
      'Failed to get config from private S3 bucket, aborting etl process',
    );
    return;
  }

  // Create and load new schema
  await database.runJob(s3Config, ignoreReady);
}
