package com.cryptocoin;


import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // add this
import android.os.Bundle; // add this



public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
    protected void onCreate(Bundle savedIntanceState) {
      SplashScreen.show(this);
      super.onCreate(savedIntanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "CryptoCoin";
  }
}
