

/**
 * Start a new socket connection
 * @param url - the url of the socket server. 
 */
function socketConnection(url)
{
	try
	{
		/* Initial a new WebSocket object, the instance will be a global variable. */
		webSocket = new WebSocket(url);
		
		writeText("console", webSocket.readyState);
		
		/* Initial all the events that associate with the WebSocket instance. */
		webSocket.onopen = function() { onOpen(); }; 
		webSocket.onclose = function() { onClose(); };
		//webSocket.onclose = function() {};
		webSocket.onmessage = function(evt) { onMessage(evt); };
		webSocket.onerror = function() { onError(); }; 
	}
	catch(exception)
	{
		writeText("console", exception);
	}
}

/**
 * 
 * @param evt - the event that associate when sokcet encounter an error.
 */
function onError() 
{ 
	writeText("console", webSocket.readyState);
} 

/**
 * Associate funtion with socketConnection(url). Handle the task when the websocket 
 * receives the message from a server. 
 * @param evt - the event that associate when sokcet receives a message.
 */
function onMessage(evt) 
{ 
	/* currently we just write the received message to console box */
	/* writeText("console", evt.data); */
	writeText("span-x-value", evt.data); 
	writeText("span-y-value", evt.data); 
	writeText("span-z-value", evt.data); 
}  

/**
 * Associate funtion with socketConnection(url). Handle the task when connection is close.
 * @param evt - the event that associate when sokcet connection is close.
 */
function onClose() 
{ 
	/* write the console massage to notify user */
	writeText("console", webSocket.readyState);
}  

/**
 * Associate funtion with socketConnection(url). Handle the task when connection is open.
 * @param evt - the event that associate when sokcet connection is open.
 */
function onOpen() 
{
	/* write the console massage to notify user */
	writeText("console", webSocket.readyState);
	
	/*
	writeToScreen("CONNECTED"); 
	doSend("WebSocket rocks"); 
	*/
}


/**
 * utility function that writes texts to a tag with the passed id.
 * @param id - the id of the tag.
 * @param message - the text message want to write.
 */
function writeText(id, message)
{
	$("#" + id).text(message);
}

//window.addEventListener("load", init, false);  

/** Main
 * This is the entry of the socket program.
 */
$(document).ready(function(){
	
	$("#connect-button").click(function () {
		var wsUri = "ws://node.remysharp.com:8001"; 
		socketConnection(wsUri);
	    });
	
	$("#stop-button").click(function () {
		webSocket.close();
	    });
});
