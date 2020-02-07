// Copyright 2020 BlueCat Networks (USA) Inc. and its affiliates
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// By: BlueCat Networks
// Date: 04-05-18
// Gateway Version: 18.6.1
// Description: Certified Gateway workflows

// JavaScript for your page goes in here.
$(document).ready(function() {

});

function reset_hostname() {
    if ($("#zone").val() == '') {
        $("#hostname").val('');
        $("#hostname").attr("disabled", true);
    }
    else {$("#hostname").attr("disabled", false);}
}

function view_changed() {
    $("#hostname").val('');
    $("#hostname").attr("disabled", true);
    $("#zone").val('')
    $("#zone").attr("disabled", true);
}