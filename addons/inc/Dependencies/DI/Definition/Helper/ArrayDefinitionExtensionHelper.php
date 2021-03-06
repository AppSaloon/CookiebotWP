<?php
/**
 * PHP-DI
 *
 * @link      http://php-di.org/
 * @copyright Matthieu Napoli (http://mnapoli.fr/)
 * @license   http://www.opensource.org/licenses/mit-license.php MIT (see the LICENSE file)
 */

namespace Cybot\Dependencies\DI\Definition\Helper;

use Cybot\Dependencies\DI\Definition\ArrayDefinitionExtension;

/**
 * Helps extending the definition of an array.
 *
 * For example you can add new entries to the array.
 *
 * @since 5.0
 * @author Matthieu Napoli <matthieu@mnapoli.fr>
 */
class ArrayDefinitionExtensionHelper implements DefinitionHelper
{
    /**
     * @var array
     */
    private $values = [];

    /**
     * @param array $values Values to add to the array.
     */
    public function __construct(array $values)
    {
        $this->values = $values;
    }

    /**
     * @param string $entryName Container entry name
     *
     * @return ArrayDefinitionExtension
     */
    public function getDefinition($entryName)
    {
        return new ArrayDefinitionExtension($entryName, $this->values);
    }
}
