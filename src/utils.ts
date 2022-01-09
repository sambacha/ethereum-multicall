export class Utils {
  /**
   * Deep clone a object
   * @param object The object
   */
  public static deepClone<T>(object: T): T {
    /**
     * @note Cloning causes data loss
     * ```ts
     * const cloned = JSON.parse(JSON.stringify(object)) as T;
     * ```
     */
    return object;
  }
}
