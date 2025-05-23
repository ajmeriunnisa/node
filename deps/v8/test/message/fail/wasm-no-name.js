// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

d8.file.execute("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();
builder.addFunction(undefined, kSig_i_v)
    .addBody([kExprUnreachable])
    .exportAs('main');
builder.instantiate().exports.main();
