<script lang="ts">
  import {
    Modal,
    ModalBody,
    ModalHeader,
    ListGroup,
    ListGroupItem
  } from 'sveltestrap';

  import AppCard from "./AppCard.svelte"
  import type { PopupInfo } from "../types/popup.type"

  let open = false;
  const toggle = () => (open = !open);

  export let title: string;
  export let body: string;
  export let modalTitle: string;
  export let popup: Array<PopupInfo>;
</script>

<div>
  <AppCard
    {title}
    {body}
    clickFunction={toggle}
  />

  <Modal isOpen={open} {toggle} transitionOptions>
    <ModalHeader style="background: #f3d7ca;" {toggle}>{modalTitle}</ModalHeader>
    <ModalBody style="background: #f5eee6;">
      <p style="font-size: 14px;">
        Must be a member of the respective unit to access the pages.
      </p>
      <ListGroup>
      {#each popup as { popupTitle, popupUrl }}
      <ListGroupItem tag="button" action href={popupUrl}>{popupTitle}</ListGroupItem>
      {/each}
    </ListGroup>
    </ModalBody>
  </Modal>
</div>