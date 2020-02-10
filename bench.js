'use strict'
import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 30,
  duration: "30s"
};

export default function() {
    const res = http.get(`http://app:8080/${__ENV.BENCH}`);
    check(res, {
      "status was 200": (r) => r.status == 200
    });
};
