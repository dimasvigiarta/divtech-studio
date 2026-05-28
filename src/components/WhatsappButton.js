import { MessageCircle } from "lucide-react";
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/6282335486623"
      className={styles.floating}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
