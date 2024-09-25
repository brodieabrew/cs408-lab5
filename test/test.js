import {lidsForm} from '../js/main.js';
import {submitLIDSForm} from '../js/main.js';

QUnit.module('Lab5', function() {

    QUnit.test("Ensure that submit event listener is in place", function(assert) {
        assert.equal(lidsForm.onsubmit, submitLIDSForm);
    });
});
