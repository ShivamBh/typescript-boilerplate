import shell from 'shelljs'
import { Service } from 'typedi'

@Service()
export class BuildService {
  isBuilding: Boolean
  constructor() {}

  buildProject() {
    shell.env['SKIP_PREFLIGHT_CHECK'] = 'true'
    // shell.exec('echo $VAR_NAME')
    shell.cd('repo')
    shell.exec('npm i')
    shell.exec('npm run build')
    shell.exec('zip -r build.zip build')
    return 'Done**'
  }
}
