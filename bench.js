'use strict'
import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10,
  duration: "30s"
};

export default function() {
    const res = http.get("http://app:8080/raw");
    check(res, {
      "status was 200": (r) => r.status == 200,
      "transaction time OK": (r) => r.timings.duration < 200,
      "response was correct": (r) => r.body === `{"foo":"raw"}`
    });
    sleep(1);
};
