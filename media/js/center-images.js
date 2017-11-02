window.onload = function() {
  var imgs = document.getElementsByTagName('img'), i, img;
  for (i = 0; i < imgs.length; i++) {
    img = imgs[i];
    // center an image if it is the only element of its parent
    if (img.parentElement.childElementCount === 1)
      img.parentElement.style.textAlign = 'center';
  }
};

# 邮箱地址复制反转
<script type="text/javascript">
var reversedEmail = document.getElementById("email").innerText;
document.getElementById("email").addEventListener('copy', function(e) {
    var selection = window.getSelection().toString();
    if (selection.indexOf(reversedEmail) >= 0) {
        var normalEmail = selection.split("").reverse().join("");
        e.clipboardData.setData("text/plain", normalEmail);
    }
    e.preventDefault();
});
</script>
