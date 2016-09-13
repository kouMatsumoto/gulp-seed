/**
 * Install gulp in global and just run gulp with tasks.
 * Need not to transpile ts, automatically gulp will resolve ts using ts-node
 *
 * This gulpfile is simply loads the tasks inside ./gulp/tasks
 */

import './gulp/tasks/default';