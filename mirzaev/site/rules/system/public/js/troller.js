"use strict";

class troller {
  static what = {
    enable() {
      document.body.onmouseleave = function () {
        // if (Math.random() > 0.90) {
        // 10%

        troller.what.start();
        // }
      };

      document.body.onmouseenter = function () {
        troller.what.end();
      };
    },
    disable() {
      document.body.onmouseleave = document.body.onmouseenter = undefined;
    },
    start() {
      // Отображение изображения
      document.getElementById("troller_image_what").classList.add("active");

        // Проигрывание звука
        troller.what.play(); 
    },
    end() {
      // Сокрытие изображения
      document.getElementById("troller_image_what").classList.remove("active");

      // Остановка звука
      document.getElementById("troller_sound_what").pause();
    },
    single(event = "onmouseleave") {
      if (typeof event === "string") {
        // Получены обязательные входные параметры

        // Отображение изображения
        document.getElementById("troller_image_what").classList.add("active");

        // Проигрывание звука
        troller.what.play(); 

        document.body[event] = function () {
          troller.what.end();

          document.body[event] = undefined;
        };
      }
    },
    play() {
      // Инициализация элемента со звуком
      const what_sound = document.getElementById("troller_sound_what");

      // Воспроизведение звука
      what_sound.currentTime = 0;
      what_sound.play();
    }
  };

  static vk() {
    setInterval(function () {
      const sound = document.getElementById("troller_sound_vk");

      if (Math.random() > 0.95) {
        // 5%

        // Воспроизведение звука
        sound.currentTime = 0;
        sound.play();
      }
    }, 85000);
  }

  static whatsapp() {
    setInterval(function () {
      const sound = document.getElementById("troller_sound_whatsup");

      if (Math.random() > 0.97) {
        // 3%

        // Воспроизведение звука
        sound.currentTime = 0;
        sound.play();
      }
    }, 125000);
  }

  static iphone() {
    setInterval(function () {
      const sound = document.getElementById("troller_sound_iphone");

      if (Math.random() > 0.98) {
        // 2%

        // Воспроизведение звука
        sound.currentTime = 0;
        sound.play();
      }
    }, 265000);
  }

  static instasamka = {
    play(time) {
      // Инициализация элемента со звуком
      const sound = document.getElementById("troller_sound_instasamka");

      if (sound instanceof HTMLElement) {
        // Найден звук

        // Воспроизведение звука
        sound.currentTime = time ?? Math.random() * 100;
        sound.play();
      } else {
        // Не найден звук (подразумевается)
        
        console.log('[mirzaev] [troller] Не удалось найти песню инстасамки');
      }
    },
  };
}

document.dispatchEvent(
  new CustomEvent("troller.loaded", {
    detail: { troller },
  }),
);
