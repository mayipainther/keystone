import path from 'path';

export function getConfigPath(cwd: string) {
  return path.join(cwd, 'keystone');
}

export function getAdminPath(cwd: string) {
  return path.join(cwd, '.keystone/admin');
}

export function getBuiltConfigPath(cwd: string) {
  return path.join(cwd, '.keystone/config.js');
}

export class ExitError extends Error {
  code: number;
  constructor(code: number) {
    super(`The process should exit with ${code}`);
    this.code = code;
  }
}
