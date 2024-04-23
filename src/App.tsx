import { useEffect, useState } from "preact/hooks";

export const App = () => {
  const [saidYes, setSaidYes] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) return;
    const n = prompt("İsim");
    if (!n) location.reload();
    setName(n!);
  }, []);

  useEffect(() => {
    document.title = "Would you like to go out with me?";

    const noBtn = document.querySelector("#no") as HTMLButtonElement;

    const handler = () => {
      noBtn.style.position = "absolute";
      const top = Math.random() * window.innerHeight - noBtn.clientHeight;
      noBtn.style.top = top + "px";
      const left = Math.random() * window.innerWidth - noBtn.clientWidth;
      noBtn.style.left = left + "px";
    };

    noBtn?.addEventListener("click", handler);
    noBtn?.addEventListener("mouseover", handler);
    noBtn?.addEventListener("touchstart", handler);

    return () => {
      noBtn?.removeEventListener("click", handler);
      noBtn?.removeEventListener("mouseover", handler);
      noBtn?.removeEventListener("touchstart", handler);
    };
  }, []);

  const handleYes = async () => {
    setSaidYes(true);

    await fetch(
      "https://aydinthefirst-wouldyoudateme-server.bdmstf.easypanel.host/send-mail",
      {
        headers: {
          "x-visitor-name": name,
        },
      }
    );
  };

  if (saidYes) return <SaidYes />;

  return (
    <>
      <div className="h-[100dvh] container grid place-items-center">
        <h1 className={"text-4xl text-white text-center"}>
          Benimle dışarı çıkmak ister misin?
        </h1>
        <div>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmZ0b2ZoaDA1YmozaGMwYmNwbDNleXJsYnpsdWE2OHVtbHVzNmNkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
            alt=""
          />
        </div>
        <div className={"flex justify-center gap-1"}>
          <button className={"button"} onClick={handleYes}>
            Evet
          </button>
          <button id={"no"} className={"button"}>
            Hayır
          </button>
        </div>
      </div>
    </>
  );
};

const SaidYes = () => {
  return (
    <div className="h-screen container grid place-items-center">
      <h1 className={"text-4xl text-white text-center"}>
        Hayır diyemeyeceğini biliyordum!
      </h1>
      <img
        src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
        alt=""
      />
    </div>
  );
};
