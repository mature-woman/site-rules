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
      document.getElementById("what_image").classList.add("active");

        // Проигрывание звука
        troller.what.play(); 
    },
    end() {
      // Сокрытие изображения
      document.getElementById("what_image").classList.remove("active");

      // Остановка звука
      document.getElementById("what_sound").pause();
    },
    single(event = "onmouseleave") {
      if (typeof event === "string") {
        // Получены обязательные входные параметры

        // Отображение изображения
        document.getElementById("what_image").classList.add("active");

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
      const what_sound = document.getElementById("what_sound");

      // Воспроизведение звука
      what_sound.currentTime = 0;
      what_sound.play();
    }
  };

  static vk() {
    setInterval(function () {
      const sound = document.getElementById("sound_vk");

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
      const sound = document.getElementById("sound_whatsup");

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
      const sound = document.getElementById("sound_iphone");

      if (Math.random() > 0.98) {
        // 2%

        // Воспроизведение звука
        sound.currentTime = 0;
        sound.play();
      }
    }, 265000);
  }

  static instasamka = {
    play(track, time) {
      // Инициализация элемента со звуком
      const sound = document.querySelectorAll('[data-instasamka]')[track];

      if (sound instanceof HTMLElement) {
        // Найден звук

        // Воспроизведение звука
        sound.currentTime = time ?? Math.random() * 100;
        sound.play();

        return;
      }

      console.log('[mirzaev] [troller] Не удалось найти песню инстасамки под идентификатором ' + track);

      // Не найден звук (подразумевается)
      troller.instasamka.play(1, time);
    },
  };
}

troller.what.enable();

if (Math.random() > 0.60) {
  // 40%

  troller.vk();
}

if (Math.random() > 0.60) {
  // 40%

  troller.whatsapp();
}

if (Math.random() > 0.60) {
  // 40%

  troller.iphone();
}
