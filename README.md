Phonegap : Download the image into Hidden folder
================================================

Here we download the image into "data" folder inside the package

we are using to plugin "File" and "File Transfer"

Plugin "File" is using for accessing the data folder path
Plugin "File Transfer "  is using to download the image

we should enable the user permission in AndroidManifest.xml

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />



