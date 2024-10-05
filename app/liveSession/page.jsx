'use client'
import { useEffect, useRef } from 'react';
import * as React from 'react';

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const page = () => {
  const ref = useRef();
  useEffect(() => {
    let zp;
    
    const initZego = async () => {
      const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

      const roomID = getUrlParams().get('roomID') || randomID(5);
      let role_str = getUrlParams(window.location.href).get('role') || 'Host';
      const role = role_str === 'Host' ? ZegoUIKitPrebuilt.Host : role_str === 'Cohost' ? ZegoUIKitPrebuilt.Cohost : ZegoUIKitPrebuilt.Audience;

      let sharedLinks = [];
      if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
        sharedLinks.push({
          name: 'Join as co-host',
          url:
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            '?roomID=' +
            roomID +
            '&role=Cohost',
        });
      }
      sharedLinks.push({
        name: 'Join as audience',
        url:
          window.location.protocol +
          '//' +
          window.location.host +
          window.location.pathname +
          '?roomID=' +
          roomID +
          '&role=Audience',
      });

      // Generate Kit Token
      const appID = 559093206;
      const serverSecret = 'b47309b51fe3eb1896fc3df950cd3949';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        randomID(5), // Unique User ID
        randomID(5)  // Unique User Name or Display ID
      );

      zp = ZegoUIKitPrebuilt.create(kitToken);

      const joinMeeting = async () => {
        try {
          await zp.joinRoom({
            liveStreamingMode: ZegoUIKitPrebuilt.LiveStreamingMode.LiveStreaming,
            enableVideoMixing: true,
            videoMixingOutputResolution: ZegoUIKitPrebuilt.VideoMixinOutputResolution._540P,
            container: ref.current,
            scenario: {
              mode: ZegoUIKitPrebuilt.LiveStreaming,
              config: {
                role,
              },
            },
            sharedLinks,
          });
        } catch (error) {
          console.error('Error joining room:', error);
        }
      };

      joinMeeting();
    }

    initZego()

    return () => {
      if (zp && typeof zp.destroy === 'function') {
        zp.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="myCallContainer"
      style={{ height: '100vh' }}
    ></div>
  );
}

export default page