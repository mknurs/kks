<?php

/**
 * Pico page modification time plugin
 *
 * Adds a page's last modification time to its page data.
 *
 * Example:
 *
 * ```twig
 * <p>Last modified: {{ current_page.modificationTime|date("Y-m-d H:i:s") }}</p>
 * ```
 *
 * @author  Daniel Rudolf
 * @link    http://picocms.org
 * @license http://opensource.org/licenses/MIT The MIT License
 * @version 0.0.1
 */
class PicoPageModPlugin extends AbstractPicoPlugin
{
    const API_VERSION = 2;
  
    public function onSinglePageLoaded(array &$pageData)
    {
        if ($pageData['id']) {
            $fileName = $this->getConfig('content_dir') . $pageData['id'] . $this->getConfig('content_ext');
            if (is_file($fileName) && !isset($pageData['modificationTime'])) {
                $pageData['modificationTime'] = filemtime($fileName);
            }
        }
    }
}