/* eslint-disable no-unused-vars */

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HMSPrebuilt } from '@100mslive/roomkit-react';

function getQueryparams(search) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let sParameterName;
  let i;
  for (i = 0; i < sURLVariables.length; i += 1) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === search) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
  return false;
}

function attachClickHandler() {
  // Remove header and toolbar
  $('[data-testid="header"], [data-testid="footer"], [data-testid="participant_video_tile"], [data-testid="control_bar"]').remove();

  // Remove chat, participant list, settings, and other panels
  $('[data-testid="chat"], [data-testid="participants_list"], [data-testid="settings"]').remove();

  // Remove extra overlays
  $('[data-testid="preview_screen"], [data-testid="leave_modal"], [data-testid="end_stream_modal"]').remove();

  // Keep only participant tiles and screenshare
  $('[data-testid="participant_tile"], [data-testid="screenshare_tile"]').show();
}

// Initial call to attach the click handler
attachClickHandler();

// Observe changes to the DOM
const observer = new MutationObserver(attachClickHandler);
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
$(document).ready(() => {
  console.log('=======================i');
  const options = {
    userName: 'beam',
    userId: 'hash',
  };
  const codee = 'mjw-fwqq-vnf';
  ReactDOM.createRoot(document.getElementById('videoPart')).render(
    <React.StrictMode>
      <HMSPrebuilt roomCode={codee} options={options}/>
    </React.StrictMode>,
  );
});
