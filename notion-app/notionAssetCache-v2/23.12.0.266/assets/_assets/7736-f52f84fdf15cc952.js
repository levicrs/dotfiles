  SELECT * FROM block
  WHERE parent_table = ${t.parent.table}
  AND parent_id = ${t.parent.id}
  AND meta_user_id = ${t.userId}
  `.asRead(),o=c.vk`
  UPDATE block
  SET meta_last_access_timestamp = ${t.timestamp}
  WHERE parent_table = ${t.parent.table}
  AND parent_id = ${t.parent.id}
  AND meta_user_id = ${t.userId}
  `.asWrite(),[i]=await(0,l.G$)({connection:e,statements:[n,o],queryName:"getBlocksWithParent"});return i.data.map((e=>({pointer:r.dr.fromPointerLike({table:a.iU,id:e.id,spaceId:e.space_id||void 0}),value:{role:e.meta_role,value:B(e,u)},userId:t.userId})))}async function Z(e,t){const n=c.vk`
    WITH RECURSIVE page_blocks AS (
      SELECT * FROM block
      WHERE id = ${t.page.id}
      AND meta_user_id = ${t.userId}

      UNION

      SELECT block.*
      FROM
        block INDEXED BY block_parent_id,
        page_blocks
      WHERE
      (
        page_blocks.id = ${t.page.id}
        OR page_blocks.type NOT IN ('page', 'toggle')
      )
      AND block.parent_table = 'block'
      AND block.parent_id = page_blocks.id
      AND block.meta_user_id = ${t.userId}
    )
    SELECT * FROM page_blocks
    `,o=await n.all(e,"getPageBlocksByParent");return 0===o.length?[]:o.map((e=>({pointer:r.dr.fromPointerLike({table:a.iU,id:e.id,spaceId:e.space_id||void 0}),value:{role:e.meta_role,value:B(e,u)},userId:t.userId})))}async function V(e,t,n){const o=n.filter((e=>"set"===e.type&&!e.maybeStaleRecord)),i=n.filter((e=>"set"===e.type&&e.maybeStaleRecord)),r=n.filter((e=>{let{type:t}=e;return"access"===t})),s=n.filter((e=>{let{type:t}=e;return"delete"===t})),d=[];if(r.forEach((e=>{const t=e.record.pointer.table;L(e.record)?t===a.iU&&d.push(c.vk`
	        UPDATE block
	        SET meta_last_access_timestamp = ${e.record.timestamp}
	        WHERE id = ${e.record.pointer.id}
	        AND meta_user_id = ${e.record.userId}
	        `.asWrite()):d.push({sql:"UPDATE records\n          SET timestamp = ?\n          WHERE record_table = ?\n          AND record_id = ?\n          AND user_id = ?",args:[e.record.timestamp,t,e.record.pointer.id,e.record.userId]})})),o.length>0||i.length>0){if(o.length>0){const e=o.map((e=>e.record));d.push(...P({records:e,maybeStaleRecords:!1}))}if(i.length>0){const e=i.map((e=>e.record));d.push(...P({records:e,maybeStaleRecords:!0}))}d.push(c.vk`
			DELETE FROM records
			WHERE rowid IN (
				SELECT rowid FROM records
				ORDER BY importance DESC, timestamp DESC
				LIMIT -1
				OFFSET ${t}
			)
			`.asWrite()),d.push(c.vk`
			DELETE FROM block
			WHERE rowid in (
				SELECT rowid FROM block
				ORDER BY meta_last_access_timestamp DESC
				LIMIT -1
				OFFSET ${t}
			)
		INSERT OR REPLACE INTO transactions (
		    id,
		    user_id,
		    space_id,
		    operations,
		    timestamp,
			debug
		)
		VALUES (
		    ${t.id},
		    ${t.userId||null},
		    ${t.spaceId||null},
		    ${JSON.stringify(t.operations)},
		    ${t.timestamp},
			${t.debug?JSON.stringify(t.debug):null}
		)