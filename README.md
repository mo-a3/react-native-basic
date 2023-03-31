# react-native-basic
basics of react-native

//react-native setup
brew install ruby
export GEM_HOME="$HOME/.gem"
gem install rails

==============
gem install cocoapods
curl -sSL https://get.rvm.io | bash -s stable
rvm install "ruby-2.7.6"
===============


$> sudo npm install -g @react-native-community/cli
$> react-native init customerAppNative
$> cd customerAppNative
$> yarn install
$> react-native run-ios
$> react-native run-android

//react-native navigation
Steps to create Navigation:

1. Close your metro bundler
2. Install these dependencies
cd CustomerAppNative
--
yarn add @react-navigation/native
yarn add @react-navigation/stack

yarn add react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
-----
3. Create folder CustomerAppNative/src
and  CustomerAppNative/src/container
and  CustomerAppNative/src/component

4. cd ios
--
pod install
--


