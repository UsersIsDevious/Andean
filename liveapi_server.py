# generate the protobuf bindings by doing `protoc events.proto --python_out='.'`
# before running, do `python -m pip install asyncio websockets`

import asyncio
import socket
import websockets
from events_pb2 import *

async def repl( websocket ):
    print("Connected!")

    async for message in websocket:
        try:
            incoming = LiveAPIEvent()
            incoming.ParseFromString( message )
            print( incoming )
        except:
            print( message )

async def main():
    # run forever on port 7777
    async with websockets.serve(repl, "localhost", 7777):
        print("Serving on port 7777...")
        await asyncio.Future()

asyncio.run(main())