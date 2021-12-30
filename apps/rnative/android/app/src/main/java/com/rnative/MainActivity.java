package com.rnative;

import com.facebook.react.ReactActivity;

/**
   * Added for react-navigation
   * https://reactnavigation.org/docs/getting-started/
   */
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rnative";
  }

  /**
   * Added for react-navigation
   * https://reactnavigation.org/docs/getting-started/
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
