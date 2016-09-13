import gulp = require('gulp');
import {execNodeTask} from '../task_helpers';


gulp.task('tslint', execNodeTask('tslint', ['-c', 'tslint.json', 'src/**/*.ts']));
