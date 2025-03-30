# Concepts of Echobell

Echobell is an instant alert app that can handle webhooks or emails, and then trigger notifications or calls to notify users. You can also subscribe to channels created by other users and get notified when a channel has been triggered.

Only the data of users, channels, and subscriptions of channels are stored on our server. The data of notifications and records are stored on your local devices.

## Concepts

### Channel

A notification channel that, once triggered, will send a notification to all subscribers.

- `Name` and `Color`, used for identifying different channels.
- [`Notification Templates`](#templates), includes a `Title template` and a `Body template`, which will be rendered with `Variables` and sent to subscribers as the title and body content for the notification.
- [`Notification Type`](#notification-type), when subscribing to a channel, you can choose a notification type, which indicates which form of notification will be sent to you when the channel is triggered.
- [`Trigger`](#trigger), a method for triggering a channel to send notifications. You can copy them from the channel detail view.
- `Subscription Link`, you can share subscription link to others let them to subscribe to the channel. You can copy from or share thought the channel detail view.

### Trigger

- `Webhook`, a link to trigger a channel. Once it is called, the channel will be triggered.
- `Email`, once you send an email to an address bonded with a channel, the channel will be triggered.

### Notification Type

- `Normal`, a normal app notification.
- `Time Sensitive`, a time-sensitive notification, it's able to break through some focus modes.
- `Calling`, a call-form notification that will send you a call-like alert.

### Templates

You can use variables in notification templates to dynamically set the title and body of notifications.

In the templates, the `{{variableName}}` will be replaced with actually values when a channel is triggered. such as if there is a title template `You have received ${{amount}}`, when you trigger the channel with an `amount` variable: `https://hook.echobell.one/t/xxx?amount=100`, then the final notification title will be `You have received $100`. You can provide variables in multiple methods when triggering a channel:

- `Webhook`, When trigger a channel with webhook, you can provide variables though query-string and json-body:

```http
GET https://hook.echobell.one/t/xxx?amount=100

# OR

POST https://hook.echobell.one/t/xxx
Content-Type: application/json

{
  "amount": 100
}
```

- `Email`, when trigger a channel with email, we will providing some variables automatically:

  - `from`: The address where the email send from
  - `to`: The address where the email send to
  - `subject`: The Subject of the email
  - `text`: The text-form body of the email content
  - `html`: The html-form body of the email content

## Be aware

- The app required the notification permission to work properly, because all the features of the app are based on notifications.