// this is a file to workaround the mess
// that Flows creates since it crawls into node_modules
// keep an eye on this issue for info:
// https://github.com/facebook/flow/issues/869#issuecomment-256643823

declare module "react" {
  declare var exports: any;
}

declare module "react-native" {
  declare var exports: any;
}
