function open_new() {
    var url1 = document.getElementById("url_part1").value;
    var url2 = document.getElementById("url_part2").value;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var finelurl;
    for (i = num1; i <= num2; i++) {
        finelurl = url1 + i + url2;
        window.open(finelurl, '_blank');
        
    }
}