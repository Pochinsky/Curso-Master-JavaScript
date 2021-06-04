const skt = io.connect("http://192.168.100.27:6677", { forceNew: true });

skt.on("messages", (data) => render(data));

const render = (data) => {
  data.map((message, index) => {
    const div = document.createElement("DIV");
    div.classList.add("message");
    const strong = document.createElement("STRONG");
    strong.textContent = message.nickname + " dice:";
    div.append(strong);
    const p = document.createElement("P");
    p.textContent = message.text;
    div.append(p);
    document.querySelector(".messages").append(div);
  });
};

const addMessage = () => {
  const message = {
    nickname: document.getElementById("nickname").value,
    text: document.getElementById("text").value,
  };
  document.getElementById("nickname").style.display = "none";
  socket.emit("add-message", message);
  return false;
};
