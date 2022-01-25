# Translation Service

More information: [Translation Service](https://exercism.org/tracks/javascript/exercises/translation-service)

## Instructions

In this exercise, you'll be providing a **`TranslationService`** where paid members have some quality assurance.

You have found an out-of-space translation API that can fulfill any translation request in a reasonable amount of time, and you want to capitalize on this.

**The API interface**

The API has a very minimal interface:

### Fetching a translation

**`api.fetch(text)`** fetches the translation of **`text`**, returning two values:

- **`translation:`** the actual translation
- **`quality:`** the quality expressed as a number
  If there is no translation available (because it has not been requested yet, see below), the API throws a **`NotAvailable`** error. An **`Untranslatable`** error is thrown if a piece of text is untranslatable.

```
api.fetch('jIyaj');
// => Promise({ resolved: 'I understand' })
```

### Requesting a translation

Some translations are known in the future. The API knows about these. That's the difference between `*NotAvailable*` (will be available, but must be requested) and **`Untranslatable`** (will never be available).

**`api.request(text, callback)`** requests the translation of **`text`**, calling the **`callback`** once it's ready, without a value, only indicating that it is now available.

> This API is unstable, which means that sometimes the API will fail and call the **`callback`** with an error. If that happens, it is okay to re-request.

```
api.request('majQa’');
// => Promise({ resolved: undefined })
```

:warning: Warning! :warning:

| :warning: CAUTION: |
| :----------------- |

| The API works its magic by teleporting in the various translators when a request comes in. This is a very costly action, so it shouldn't be called when a translation is available. Unfortunately, not everyone reads the manual, so there is a system in place to kick-out bad actors.

If an api.request is called for text is available, the API throws an AbusiveClientError for this call, and every call after that. Ensure that you never request a translation if something has already been translated. |

### 1. Fetch a translation, ignoring the quality

Implement a function **`free(text)`** to fetch a translation, ignoring the quality, and forwarding any errors thrown by the API:

- Returns the translation if it can be retrieved, regardless of its quality
- Forwards any error from the translation API

```
service.free('jIyaj');
// => Promise<...> resolves "I understand."

service.free("jIyajbe'");
// => Promise<...> rejects Error("Not yet translated")
```

### 2. Fetch a batch of translations, all-or-nothing

Implement a function **`batch([text, text, ...])`** that translates the given texts using the free service, returning all the translations, or a single error.

- Resolves with all the translations (in the same order), if they are all available
- Rejects with the first error that is encountered
- Rejects with a **`BatchIsEmpty`** error if no texts are given

```
service.batch(['jIyaj', "majQa'"]);
// => Promise<...> resolves ["I understand.", "Well done!"]

service.batch(['jIyaj', "jIyajbe'"]);
// => Promise<...> rejects new Error("Not yet translated")

service.batch([]);
// => Promise<...> rejects BatchIsEmpty()
```

### 3. Request a translation, retrying at most 2 times

Implement a function **`request(text)`** that requests a translation, with automatic retries, up to a total of 3 calls for the same request.

- If **`api.request`** does not return an error, resolve with **`undefined`**
- If **`api.request`** returns an error, retry at most two times
- If you're out of retires, reject with the last error received

```
service.request("jIyajbe'");
// => Promise<...> resolves (with nothing), can now be retrieved using the fetch API
```

### 4. Fetch a translation, inspect the quality, or request it

Implement the function **`premium(text, quality)`** for premium users, which fetches a translation, request it if it's not available, and only returns it if it meets a certain threshold.

- If **`api.fetch`** resolves, check the quality before resolving
- If **`api.fetch`** rejects with **`NotAvailable`**, request the translation instead
- If _`api.fetch`_ rejects with **`Untranslatable`**, forward the error
- If requesting rejects, forward the error

```
service.premium("jIyajbe'", 100);
// => Promise<...> resolves "I don't understand."

service.premium("'arlogh Qoylu'pu'?", 100);
// => Promise<...> rejects QualityThresholdNotMet()

service.premium("'arlogh Qoylu'pu'?", 40);
// => Promise<...> resolves "What time is it?"
```

N.B.

| :information_source: NOTE                                                           |
| :---------------------------------------------------------------------------------- |
| The correct translation of 'arlogh Qoylu'pu'? is How many times has it been heard?. |
