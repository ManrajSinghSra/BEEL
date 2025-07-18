<script>
  document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const age = form.get("age");

    const res = await fetch(`/greet?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`, {
      method: "GET",
      headers: {
        "Accept": "text/plain", // optional: tells server you want plain text
        "X-Client": "ManrajApp" // optional: custom header
      }
    });

    const text = await res.text();
    document.getElementById("result").innerText = text;
  });
</script>
