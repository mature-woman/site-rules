"use strict";

class troller {
  constructor() {
    this.what = {
      // HTML-элемент с изображением
      sound: document.getElementById("troller_sound_what"),

      // HTML-элемент со звуком
      image: document.getElementById("troller_image_what"),

      enable() {
        document.body.onmouseleave = () => this.start();
        document.body.onmouseenter = () => this.end();
      },
      disable() {
        document.body.onmouseleave = document.body.onmouseenter = undefined;
      },
      start() {
        // Отображение изображения
        this.image.classList.add("active");

        // Проигрывание звука
        this.play();

        // Остановка воспроизведения инстасамки
        if (this.core.instasamka.initialized) this.core.instasamka.pause(); 
      },
      end() {
        // Сокрытие изображения
        this.image.classList.remove("active");

        // Возобновление воспроизведения инстасамки
        if (this.core.instasamka.initialized) this.core.instasamka.play();

        // Остановка звука
        this.sound.pause();
      },
      single(event = "onmouseleave") {
        if (typeof event === "string") {
          // Получены обязательные входные параметры

          // Отображение изображения
          this.image.classList.add("active");

          // Проигрывание звука
          this.play(); 

          document.body[event] = function () {
            this.end();

            document.body[event] = undefined;
          };
        }
      },
      play() {
        // Воспроизведение звука
        this.sound.currentTime = 0;
        this.sound.play();
      }
    };

    this.instasamka = {
      // HTML-элемент с аудиозаписью
      sound: document.getElementById("troller_sound_instasamka"),

      initialized: false,

      play(time) {
        if (this.sound instanceof HTMLElement) {
          // Найден звук
         
          // Инициализация инстасамки
          if (!this.initialized) this.initialized = true;

          // Инициализация временной метки для воспроизведения 
          if (typeof time === 'number') this.sound.currentTime = time;

          // Воспроизведение звука
          this.sound.play();
        } else {
          // Не найден звук (подразумевается)
          
          console.log('[mirzaev] [troller] Не удалось найти песню инстасамки');
        }
      },
      pause() {
        if (this.sound instanceof HTMLElement) {
          // Найден звук

          // Остановка воспроизведения звука
          this.sound.pause();
        } else {
          // Не найден звук (подразумевается)
          
          console.log('[mirzaev] [troller] Не удалось найти песню инстасамки');
        }
      },
    };

    // Инициализация ссылок на ядро
    this.what.core = this.instasamka.core = this;
  }
  
  vk() {
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

  whatsapp() {
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

  iphone() {
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
}

document.dispatchEvent(
  new CustomEvent("troller.loaded", {
    detail: { troller },
  }),
);
