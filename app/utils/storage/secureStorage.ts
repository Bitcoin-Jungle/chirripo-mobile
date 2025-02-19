import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store"

export default class KeyStoreWrapper {
  private static readonly IS_BIOMETRICS_ENABLED = "isBiometricsEnabled"
  private static readonly PIN = "PIN"
  private static readonly PIN_ATTEMPTS = "pinAttempts"
  private static readonly SEND_LOCK = "sendLock"
  private static readonly POINT_OF_SALE = "pointOfSaleList"

  public static async getIsBiometricsEnabled(): Promise<boolean> {
    try {
      await RNSecureKeyStore.get(KeyStoreWrapper.IS_BIOMETRICS_ENABLED)
      return true
    } catch {
      return false
    }
  }

  public static async setIsBiometricsEnabled(): Promise<boolean> {
    try {
      await RNSecureKeyStore.set(KeyStoreWrapper.IS_BIOMETRICS_ENABLED, "1", {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      })
      return true
    } catch {
      return false
    }
  }

  public static async removeIsBiometricsEnabled(): Promise<boolean> {
    try {
      await RNSecureKeyStore.remove(KeyStoreWrapper.IS_BIOMETRICS_ENABLED)
      return true
    } catch {
      return false
    }
  }

  public static async getIsPinEnabled(): Promise<boolean> {
    try {
      await RNSecureKeyStore.get(KeyStoreWrapper.PIN)
      return true
    } catch {
      return false
    }
  }

  public static async getPinOrEmptyString(): Promise<string> {
    try {
      return await RNSecureKeyStore.get(KeyStoreWrapper.PIN)
    } catch {
      return ""
    }
  }

  public static async setPin(pin: string): Promise<boolean> {
    try {
      await RNSecureKeyStore.set(KeyStoreWrapper.PIN, pin, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      })
      return true
    } catch {
      return false
    }
  }

  public static async removePin(): Promise<boolean> {
    try {
      await RNSecureKeyStore.remove(KeyStoreWrapper.PIN)
      return true
    } catch {
      return false
    }
  }

  public static async getPinAttemptsOrZero(): Promise<number> {
    try {
      return Number(await RNSecureKeyStore.get(KeyStoreWrapper.PIN_ATTEMPTS))
    } catch {
      return 0
    }
  }

  public static async setPinAttempts(pinAttempts: string): Promise<boolean> {
    try {
      await RNSecureKeyStore.set(KeyStoreWrapper.PIN_ATTEMPTS, pinAttempts, {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      })
      return true
    } catch {
      return false
    }
  }

  public static async resetPinAttempts(): Promise<boolean> {
    return await KeyStoreWrapper.setPinAttempts("0")
  }

  public static async removePinAttempts(): Promise<boolean> {
    try {
      await RNSecureKeyStore.remove(KeyStoreWrapper.PIN_ATTEMPTS)
      return true
    } catch {
      return false
    }
  }

  public static async getIsSendLockEnabled(): Promise<boolean> {
    try {
      await RNSecureKeyStore.get(KeyStoreWrapper.SEND_LOCK)
      return true
    } catch {
      return false
    }
  }

  public static async setIsSendLockEnabled(): Promise<boolean> {
    try {
      await RNSecureKeyStore.set(KeyStoreWrapper.SEND_LOCK, "1", {
        accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
      })
      return true
    } catch {
      return false
    }
  }

  public static async removeIsSendLockEnabled(): Promise<boolean> {
    try {
      await RNSecureKeyStore.remove(KeyStoreWrapper.SEND_LOCK)
      return true
    } catch {
      return false
    }
  }

  public static async getPointOfSales(): Promise<array> {
    try {
      const data = await RNSecureKeyStore.get(KeyStoreWrapper.POINT_OF_SALE)
      return JSON.parse(data)
    } catch {
      return []
    }
  }

  public static async setPointOfSales(arr: array): Promise<boolean> {
    try {
      await RNSecureKeyStore.set(KeyStoreWrapper.POINT_OF_SALE, JSON.stringify(arr), {
        accessible: ACCESSIBLE.ALWAYS,
      })
      return true
    } catch {
      return false
    }
  }

  public static async removePointOfSales(): Promise<boolean> {
    try {
      await RNSecureKeyStore.remove(KeyStoreWrapper.POINT_OF_SALE)
      return true
    } catch {
      return false
    }
  }
}
