import { Event } from 'ledger'

const events: Event[] = [
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"7b1470c9c15ffpf54q6u7csev7","event_date":"2019-11-20T19:39:14.586314+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"7b1470c9c15ffpf54q6u7csev7","event_date":"2019-11-20T19:39:14.586314+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"q3ljg2nkudqm75a3sbp89j39n8","event_date":"2019-11-20T19:10:14.058167+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"1","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_EXPIRED","resource_external_id":"q3ljg2nkudqm75a3sbp89j39n8","event_date":"2019-11-20T19:10:14.058167+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"1","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_STARTED","resource_external_id":"76sj4943q7uti7jfehagu06qsp","event_date":"2019-11-20T18:46:15.611405+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"76sj4943q7uti7jfehagu06qsp","event_date":"2019-11-20T18:46:14.128834+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"76sj4943q7uti7jfehagu06qsp","event_date":"2019-11-20T18:46:14.128834+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"CAPTURE_SUBMITTED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:46:12.123997+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"CAPTURE_CONFIRMED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:46:12.123997+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:46:12.123997+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"USER_APPROVED_FOR_CAPTURE","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:46:12.015759+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_DETAILS_ENTERED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:46:10.626163+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"AUTHORISATION_SUCCEEDED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:46:10.626163+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_STARTED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:45:38.559003+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:45:34.120359+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"ll2hmtgpshpa20nn1triir30d8","event_date":"2019-11-20T18:45:34.120359+00:00","card_brand":"master-card","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"CAPTURE_SUBMITTED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:32.240033+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:32.240033+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"CAPTURE_CONFIRMED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:32.240033+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"USER_APPROVED_FOR_CAPTURE","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:32.098011+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_DETAILS_ENTERED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:30.389102+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"AUTHORISATION_SUCCEEDED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:30.389102+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_STARTED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:15.239044+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:11.957803+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"tqct8chq224htqpib8nfitgplb","event_date":"2019-11-20T18:45:11.957803+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"jbr3u5tedbl3rkim41uhc8ubsj","event_date":"2019-11-20T18:45:09.988005+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"jbr3u5tedbl3rkim41uhc8ubsj","event_date":"2019-11-20T18:45:09.988005+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_DETAILS_ENTERED","resource_external_id":"5mqrbcahv7v4i1tkb2hfu01sks","event_date":"2019-11-20T18:42:57.449859+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"AUTHORISATION_SUCCEEDED","resource_external_id":"5mqrbcahv7v4i1tkb2hfu01sks","event_date":"2019-11-20T18:42:57.449859+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_STARTED","resource_external_id":"5mqrbcahv7v4i1tkb2hfu01sks","event_date":"2019-11-20T18:42:41.008104+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"5mqrbcahv7v4i1tkb2hfu01sks","event_date":"2019-11-20T18:42:39.471119+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"5mqrbcahv7v4i1tkb2hfu01sks","event_date":"2019-11-20T18:42:39.471119+00:00","card_brand":"visa","payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"CANCELLED_BY_USER","resource_external_id":"nfk3ellov4ja6ol4kcpkn93jik","event_date":"2019-11-20T18:33:20.156246+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"nfk3ellov4ja6ol4kcpkn93jik","event_date":"2019-11-20T18:33:20.156246+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_STARTED","resource_external_id":"nfk3ellov4ja6ol4kcpkn93jik","event_date":"2019-11-20T18:32:01.870159+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"nfk3ellov4ja6ol4kcpkn93jik","event_date":"2019-11-20T18:32:00.205441+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"nfk3ellov4ja6ol4kcpkn93jik","event_date":"2019-11-20T18:32:00.205441+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_EXPIRED","resource_external_id":"fspdbaqoh9kbetj4c530eb094m","event_date":"2019-11-20T17:53:12.865853+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"fspdbaqoh9kbetj4c530eb094m","event_date":"2019-11-20T17:53:12.865853+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_STARTED","resource_external_id":"q3ljg2nkudqm75a3sbp89j39n8","event_date":"2019-11-20T17:39:59.930191+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"1","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_CREATED","resource_external_id":"q3ljg2nkudqm75a3sbp89j39n8","event_date":"2019-11-20T17:39:59.671064+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"1","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"q3ljg2nkudqm75a3sbp89j39n8","event_date":"2019-11-20T17:39:59.671064+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"1","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_EXPIRED","resource_external_id":"uqra3ne94b4vbrvk20ds8hhegh","event_date":"2019-11-20T17:32:13.925643+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"uqra3ne94b4vbrvk20ds8hhegh","event_date":"2019-11-20T17:32:13.925643+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"PAYMENT_EXPIRED","resource_external_id":"09jnrn8rb2u03r7908ag7dq5rh","event_date":"2019-11-20T17:32:13.903136+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"},
  {"amount": 100, "event_type":"REFUND_AVAILABILITY_UPDATED","resource_external_id":"09jnrn8rb2u03r7908ag7dq5rh","event_date":"2019-11-20T17:32:13.903136+00:00","card_brand":null,"payment_provider":"sandbox","gateway_account_id":"136","type":"PAYMENT"}
]
