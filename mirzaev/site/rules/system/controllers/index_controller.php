<?php

declare(strict_types=1);

namespace mirzaev\site\rules\controllers;

// Файлы проекта
use mirzaev\site\rules\controllers\core;

/**
 * Контроллер основной страницы
 *
 * @package mirzaev\site\rules\controllers
 * @author Arsen Mirzaev Tatyano-Muradovich <arsen@mirzaev.sexy>
 */
final class index_controller extends core
{
  /**
   * Главная страница
   *
   * @param array $parameters Параметры запроса
   */
  public function index(array $parameters = []): ?string
  {
    // Инициализация шутника
    $this->variables['troller'] = [
      'instasamka' => rand(1, 11),
      'vk' => (bool) rand(0, 1),
      'whatsapp' => (bool) rand(0, 1),
      'iphone' => (bool) rand(0, 1),
    ];


    // Генерация представления
    return $this->view->render(DIRECTORY_SEPARATOR . 'index.html', $this->variables);
  }
}
