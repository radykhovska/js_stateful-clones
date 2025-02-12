'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let transformedState = Object.assign({}, state);
  const recievedStates = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        transformedState = Object.assign(transformedState, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete transformedState[key];
        }
        break;

      case 'clear':
        transformedState = {};
        break;

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }

    recievedStates.push({ ...transformedState });
  }

  return recievedStates;
}

module.exports = transformStateWithClones;
