$(document).ready(function () {
    $("#formOne").submit(function (e) {
        e.preventDefault();

        const person1Input = $("input#person1").val();
        const person2Input = $("input#person2").val();
        const animalInput = $("input#animal").val();
        const exclamationInput = $("input#exclamation").val();
        const verbInput = $("input#verb").val();
        const nounInput = $("input#noun").val();

        $(".person1").html("<b>" + person1Input + "</b>");
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();
    });
});