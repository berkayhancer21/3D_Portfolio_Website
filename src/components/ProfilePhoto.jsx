import { useState } from "react";
import { profile } from "../constants/index.js";

/**
 * Ana sayfadaki profil fotoğrafı (3D odanın yerine).
 * Fotoğrafı public/images/profile.jpg olarak ekle (veya constants içindeki yolu değiştir).
 * Fotoğraf bulunamazsa baş harflerle bir yer tutucu gösterilir.
 */
const ProfilePhoto = () => {
    const [hasError, setHasError] = useState(false);
    const initials = profile.name
        .split(" ")
        .map((part) => part[0])
        .join("");

    return (
        <div className="profile-photo">
            <div className="profile-photo-glow" aria-hidden="true" />

            <div className="profile-photo-border">
                <div className="profile-photo-frame">
                    {hasError ? (
                        <div className="profile-photo-fallback" aria-label={profile.name}>
                            <span>{initials}</span>
                        </div>
                    ) : (
                        <img
                            src={profile.photo}
                            alt={profile.name}
                            width="480"
                            height="600"
                            fetchPriority="high"
                            decoding="async"
                            onError={() => setHasError(true)}
                        />
                    )}
                </div>
            </div>

            <div className="profile-photo-card">
                <p className="profile-photo-name">{profile.name}</p>
                <p className="profile-photo-role">
                    {profile.role} · {profile.location}
                </p>
            </div>
        </div>
    );
};

export default ProfilePhoto;
