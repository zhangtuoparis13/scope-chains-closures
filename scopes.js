/**
 * Created by tuo on 16/7/26.
 */

// exo1
/*function foo() {
    var bar
}*/

// exo2 & 3
function foo() {
    var bar = 2
    quux = 2
    function zip() {
        var quux =1
        bar = true
    }
    return zip
}
