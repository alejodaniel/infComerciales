function ValidacionChecks() {
    var checkSi = document.getElementById("checksSi");
    var checkNo = document.getElementById("checksNo");
    var checkSi1 = document.getElementById("checksSi1");
    var checkNo2 = document.getElementById("checksNo2");

    //var textTarea = document.getElementById("descriptionTrue");
    if (checkSi.checked) {
        document.getElementById("descriptionTrue").style.display = "inline";
    }
    if (checkNo.checked) {
        document.getElementById("descriptionTrue").style.display = "none";

    }
    if (checkSi1.checked) {
        document.getElementById("descriptionTrue1").style.display = "inline";
    }
    if (checkNo2.checked) {
        document.getElementById("descriptionTrue1").style.display = "none";

    }

}