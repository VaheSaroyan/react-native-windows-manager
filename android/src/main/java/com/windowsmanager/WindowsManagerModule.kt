package com.windowsmanager

import android.app.Activity
import android.os.Handler
import android.os.Looper
import android.os.Message
import android.view.WindowManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class WindowsManagerModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  companion object {
          private const val SOFT_INPUT_ADJUST_NOTHING = "ADJUST_NOTHING"
          private const val SOFT_INPUT_ADJUST_PAN = "ADJUST_PAN"
          private const val SOFT_INPUT_ADJUST_RESIZE = "ADJUST_RESIZE"
          private const val SOFT_INPUT_ADJUST_UNSPECIFIED = "ADJUST_UNSPECIFIED"
      }

      override fun getName(): String {
          return "WindowsManager"
      }

      private val mHandler = object : Handler(Looper.getMainLooper()) {
          override fun handleMessage(msg: Message) {
              super.handleMessage(msg)
              val activity: Activity? = currentActivity
              activity?.window?.setSoftInputMode(msg.what)
          }
      }

      override fun getConstants(): Map<String, Any> {
          return mapOf(
              SOFT_INPUT_ADJUST_NOTHING to WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING,
              SOFT_INPUT_ADJUST_PAN to WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN,
              SOFT_INPUT_ADJUST_RESIZE to WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE,
              SOFT_INPUT_ADJUST_UNSPECIFIED to WindowManager.LayoutParams.SOFT_INPUT_ADJUST_UNSPECIFIED
          )
      }

      @ReactMethod
      fun set(type: Int) {
          val msg = Message.obtain()
          msg.what = type
          mHandler.sendMessageDelayed(msg, 0)
      }
}
