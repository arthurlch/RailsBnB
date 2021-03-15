class ChangeImageUrlToAvatar < ActiveRecord::Migration[5.2]
  
  def up 
    rename_column :properties, :image_url, :avatar
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end

  def down
    rename_column :properties, :avatar, :image_url
  end
end
